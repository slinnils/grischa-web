import "./Switch.css";

function Switch({ onSwitch, isMobile }) {
  return (
    <div className="flex gap-2 items-center text-sm border rounded-xl p-3 bg-gw-bg-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        height="35px"
        viewBox="0 0 64 64"
        strokeWidth="3"
        stroke={!isMobile ? "#38bdf8" : "#38bdf840"}
        fill="#0f1419"
      >
        <rect x="8.6" y="10.11" width="46.81" height="36.51" rx="2" />
        <line x1="8.6" y1="39.3" x2="55.4" y2="39.3" />
        <line x1="29" y1="46.62" x2="26" y2="54.27" />
        <line x1="35.5" y1="46.62" x2="38.5" y2="54.27" />
        <line x1="21.09" y1="53.89" x2="42.91" y2="53.89" />
      </svg>
      <input
        checked={isMobile}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={onSwitch}
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        height="35px"
        viewBox="0 0 24 24"
        fill="#0f1419"
      >
        <path
          d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
          stroke={isMobile ? "#38bdf8" : "#38bdf840"}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default Switch;
