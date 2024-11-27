import styles from "./episodes.module.css";
import { TagEnum } from "../../types/episode";

interface EpisodesFilterProps {
  handleFilter: (value: '' | TagEnum) => void
  filter: string
}

const EpisodesFilter = ({ handleFilter, filter }: EpisodesFilterProps) => {
  return (
    <div className={styles.episodes_fliters_container}>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === "" ? styles.selected : ""
        }`}
        onClick={() => handleFilter("")}
      >
        Todos
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum.EDIBORDIAL ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum.EDIBORDIAL)}
      >
        Edibordiales
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["HORA AFRICANA"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["HORA AFRICANA"])}
      >
        La Hora Africana
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["HAA HUNTER"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["HAA HUNTER"])}
      >
        HAA Hunter
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["DD/DS"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["DD/DS"])}
      >
        DD/DS
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["STORYBORD"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["STORYBORD"])}
      >
        Storybord
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["MAXIMA VERDAD"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["MAXIMA VERDAD"])}
      >
        Máxima Verdad
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["MAXIMA CIENCIA"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["MAXIMA CIENCIA"])}
      >
        Máxima Ciencia
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["COMPETENCIA"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["COMPETENCIA"])}
      >
        Competencias
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["ESPECIAL"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["ESPECIAL"])}
      >
        Especiales
      </button>
      <button
        className={`${styles.episodes_filter_button} ${
          filter === TagEnum["MÉTODO"] ? styles.selected : ""
        }`}
        onClick={() => handleFilter(TagEnum["MÉTODO"])}
      >
        Métodos
      </button>
    </div>
  );
};

export default EpisodesFilter;
