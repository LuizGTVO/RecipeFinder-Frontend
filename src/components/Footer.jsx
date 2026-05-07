import iconInstagram from '../assets/icons/icon-instagram.svg';
import iconBluesky from '../assets/icons/icon-bluesky.svg';
import iconTiktok from '../assets/icons/icon-tiktok.svg';

export default function Footer() {
  return (
    <footer className="bg-[#f7f5f2] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600">Made with ❤️ and 🥑</p>

        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src={iconInstagram}
              alt="Instagram"
              className="w-6 h-6 hover:scale-110 transition cursor-pointer"
            />
          </a>

          <a href="https://x.com" target="_blank" rel="noreferrer">
            <img
              src={iconBluesky}
              alt="X"
              className="w-6 h-6 hover:scale-110 transition cursor-pointer"
            />
          </a>

          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <img
              src={iconTiktok}
              alt="TikTok"
              className="w-6 h-6 hover:scale-110 transition cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}