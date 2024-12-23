import { getCountryTime } from "../funcs/utils";
import type { YoutubeChannel } from "../types/youtube";
import { parseStringPromise } from "xml2js";

export async function checkLiveStream(
  channelId: string
): Promise<{ isLive: boolean; link?: string }> {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${
    import.meta.env.YOUTUBE_API_KEY
  }`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al buscar el canal", { cause: res });
    const data: YoutubeChannel = await res.json();
    if (data.items && data.items.length > 0) {
      const liveStream = data.items[0];
      if (liveStream.snippet.title.toLowerCase().includes("hay algo ah")) {
        const video = liveStream.id.videoId;
        return {
          isLive: true,
          link: `https://www.youtube.com/watch?v=${video}`,
        };
      } else {
        return { isLive: false };
      }
    } else {
      return { isLive: false };
    }
  } catch (error: any) {
    console.error(error.message);
    console.error(await error.cause.json());
    return { isLive: false };
  }
}

export async function getYoutubeLiveInfo(channelId: string) {
  if (getCountryTime(-3).getHours() < 21) {
    return { isLive: false };
  }

  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    const response = await fetch(rssUrl);
    const xml = await response.text();
    const result = await parseStringPromise(xml);

    const videos = result.feed.entry;
    const video = videos.find(
      (video: any) =>
        video.title[0].toLowerCase().includes("hay algo ah") &&
        video.title[0].toLowerCase().includes("en vivo")
    );

    if (video) {   
      return {
        isLive: true,
        link: `https://www.youtube.com/watch?v=${video["yt:videoId"][0]}`,
      };
    } else {
      return { isLive: false };
    }
  } catch (error) {
    console.error(error);
    return { isLive: false };
  }
}
