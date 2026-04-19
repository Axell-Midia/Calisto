type ButtonProps = {
  children: React.ReactNode
  c?: () => void
  variant?: "primary" | "secondary" | "danger"
}

const styles = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  secondary: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
  danger: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
}

function MyButton({ children, c, variant }: ButtonProps) {
  return (
    <>
      <button onClick={c}
        className={styles[variant || "primary"]}>
        {children}
      </button>
    </>
  )
}

export default MyButton