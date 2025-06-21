import { useNavigate } from "react-router-dom";
function CastList({ person }) {
  const navigate = useNavigate();
  return (
    <section
      className="hover:scale-110 transition-all duration-100 ease-in cursor-pointer"
      onClick={() => navigate(`/person/${person.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
        alt={person.name}
        className="w-[120px] md:w-[200px] rounded-lg hover:border-[3px] 
        border-gray-400 "
      />
      <p className="w-[120px] md:w-[200px] text-white mt-2 text-[12px] md:text-lg">
        {person.name}
      </p>
      <p className="w-[120px] md:w-[200px] text-white mt-2 text-[12px] md:text-lg">
        Cast: {person.character}
      </p>
    </section>
  );
}

export default CastList;
