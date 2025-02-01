import PropTypes from 'prop-types';

const Header = ({ title = "PURRING TEST", rewardPoints }) => {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center relative">
      <span className="text-xl font-bold text-gray-900">{title}</span>
      
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span className="text-2xl font-bold">REWARD: {rewardPoints}</span>
        {/* Yarn emoji as icon */}
        <span className="text-xl" role="img" aria-label="yarn">🧶</span>
      </div>

      <div className="flex gap-4">
        <button // TODO: add help button onclick
          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
          aria-label="help"
        >
          ?
        </button>
        <button // TODO: add information button onclicks
          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
          aria-label="information"
        >
          i
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  rewardPoints: PropTypes.number
};

export default Header;