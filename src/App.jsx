import PropTypes from "prop-types";

export default function App() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Lego color="blue" />
      <Lego
        color="red"
        size="lg"
        onClick={(e) => {
          console.log("Patate clicked", e);
        }}
      >
        Patate
      </Lego>
      <Lego size="lg">
        <button
          className="border bg-zinc-900 text-white rounded-md px-2 py-1"
          onClick={(e) => {
            console.log("Click !", e);
          }}
        >
          Click me
        </button>
      </Lego>
      <Lego color="blue" />
      <p>Text</p>
    </div>
  );
}

function Lego({ color = "red", size = "sm", children, onClick }) {
  // console.log(props);
  return (
    <div
      className={`h-16 flex items-center justify-center ${COLORS[color]} ${SIZE[size]}`}
      onClick={() => {
        onClick?.("mon super paramètre");
      }}
    >
      {children}
    </div>
  );
}

const COLORS = {
  red: "bg-red-500",
  blue: "bg-blue-500",
};

const SIZE = {
  sm: "w-32",
  lg: "w-44",
};

// Validation des props
Lego.propTypes = {
  color: PropTypes.string.isRequired, // La prop `color` est obligatoire et doit être une chaîne
  size: PropTypes.oneOf(["sm", "lg"]), // `size` peut être soit "sm" soit "lg"
  children: PropTypes.node, // `children` peut être n'importe quel contenu React
  onClick: PropTypes.func, // `onClick` doit être une fonction
};
