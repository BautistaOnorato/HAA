import { useRef, useState } from "react";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import styles from "./common.module.css";
import ChevronUpIcon from "../../icons/ChevronUpIcon";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);
  const contentHeight = useRef<HTMLDivElement>(null!)


  return (
    <div className={styles.accordion}>
      <div className={`${styles.accordion_title} ${open ? styles.active : ""}`} onClick={() => setOpen(!open)}>
        <span className={styles.accordion_title_text}>{title}</span>
        {open ? <ChevronUpIcon size={32} /> : <ChevronDownIcon size={32} />}
      </div>

      <div className={styles.accordion_content_container}>
        <div 
          className={styles.accordion_content}
          ref={contentHeight}
          style={
            open ? { height: `${contentHeight.current.scrollHeight}px` } : { height: "0px" }
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
