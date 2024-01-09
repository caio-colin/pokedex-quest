export const CloseIcon = ({ onClick, size = 32 }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="#000000"
      viewBox="0 0 256 256"
      onClick={handleClick}
    >
      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
    </svg>
  )
}
