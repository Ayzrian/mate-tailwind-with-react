export function Header({ children }) {
    return (
      <div className="bg-base-300">
        <div className="navbar container mx-auto">
          <h1 className="text-xl">
            {children}
          </h1>
        </div>
       </div>
    )
}