import { useEffect, useState } from "react";

const Programs = () => {
  const [list, setList] = useState<ProgramProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <ul>
      {list.map((program) => (
        <li key={program.id}>{program.title}</li>
      ))}
    </ul>
  );
};

export default Programs;
