import log from "../assets/Images/anime.png";
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="relative w-16 h-16  md:w-32 md:h-32 flex items-center justify-center">
        {/* Animasi kotak berputar */}
        <div className="absolute w-full h-full border-4 border-blue-500 animate-spin rounded-md" />

        {/* Teks di tengah */}
        <img src={log} />
      </div>
    </div>
  );
}

export default LoadingSpinner;
