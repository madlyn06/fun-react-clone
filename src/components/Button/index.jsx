const Button = ({
  title = '支援する',
  classnameButton,
  classnameButtonWrapper,
  showSvg = true,
  handleClickButton,
  ...rest
}) => {
  return (
    <div
      className="button-custom"
      style={classnameButtonWrapper}
      onClick={handleClickButton}
    >
      <button style={classnameButton} {...rest}>
        {title}
        {showSvg && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M6.125 11.25L9.875 7.5L6.125 3.75"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
export default Button
