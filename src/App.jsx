import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4 flex flex-col gap-4">
      <input
        checked={show}
        onChange={(e) => {
          setShow(e.target.checked);
        }}
        type="checkbox"
      ></input>
      {show ? <MousePosition /> : null}
      <Lego color="blue" />
      <Lego
        color="red"
        size="lg"
        onClick={(e) => {
          console.log("Patate clicked", e);
        }}
      >
        <p className="ml-2">Patate</p>
      </Lego>
      <Lego size="lg">
        <button
          className="border bg-zinc-900 text-white rounded-md ml-2 px-2 py-1"
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

function MousePosition() {
  const [mousePosition, setMouvePosition] = useState({ x: 1, y: 1 });

  useEffect(() => {
    console.log("Setup");

    console.log("Create event listener");
    document.body.addEventListener("mousemove", (e) => {
      console.log("Run mousemove with");

      setMouvePosition({ x: e.clientX, y: e.clientY });
    });

    return () => {
      // Cleanup
      console.log("Cleanup");
    };
  }, []);

  return (
    <div className="">
      X : {mousePosition.x} / Y : {mousePosition.y}
    </div>
  );
}

// Render
// view = function(state)
function Lego({ color = "red", size = "sm", children, onClick }) {
  const [value, setValue] = useState(95);

  console.log("Render", value);
  return (
    <div
      className={`h-16 flex items-center justify-center ${COLORS[color]} ${SIZE[size]}`}
      onClick={() => {
        onClick?.("mon super paramètre");
        setValue(value + 1);
      }}
    >
      {value}
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

