function Button({ htmlFor, text }) {
  return (
    <label className="sectionForm__form__button--btn" htmlFor={htmlFor}>{text}
      <input
        name={htmlFor}
        id={htmlFor}
        className="hidden"
        type="button"
        value={text}
      />
    </label>
  )
}

export default Button;


