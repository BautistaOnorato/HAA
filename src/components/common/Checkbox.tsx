import styles from './common.module.css'

interface CheckboxProps {
  name: string
  label: string
  checked: boolean
  onChange: (value: string) => void
}

const Checkbox = ({ name, label, onChange, checked }: CheckboxProps) => {
  return (
    <label htmlFor={name} className={styles.checkbox_container}>{label}
      <input type="checkbox" id={name} name={name} checked={checked} onChange={() => onChange(name)} className={styles.custom_checkbox} />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default Checkbox