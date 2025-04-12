
const Container = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto px-4 md:px-20 ${className}`}>
      {children}
    </div>
  )
}

export default Container
