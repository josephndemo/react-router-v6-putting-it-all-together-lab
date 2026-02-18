import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
  const { directors } = useOutletContext();

  return (
    <ul>
      {directors.map((d) => (
        <li key={d.id}>
          <Link to={d.id}>{d.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DirectorList;
