import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ColorSettings({ localSettings, setSetting }) {
  return (
    <div className="pt-6 flex flex-col tablet:flex-row tablet:justify-between tablet:items-center gap-4">
      <h2 className="text-blue-900 font-bold text-[11px] tablet:text-[13px] leading-3.5 tablet:leading-base tracking-[4.23px] tablet:tracking-[5px] uppercase text-center tablet:text-start">Color</h2>

      <div className="flex gap-4 justify-center">
        <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-red-400">
          <input
            type="radio"
            name="color"
            value="red"
            checked={localSettings.color === "red"}
            onChange={() => setSetting("color", "red")}
            className="hidden peer"
          />
          <FontAwesomeIcon icon={faCheck} className="opacity-0 peer-checked:opacity-100 text-[16px]" />
        </label>

        <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-cyan-300">
          <input
            type="radio"
            name="color"
            value="cyan"
            checked={localSettings.color === "cyan"}
            onChange={() => setSetting("color", "cyan")}
            className="hidden peer"
          />
          <FontAwesomeIcon icon={faCheck} className="opacity-0 peer-checked:opacity-100 text-[16px]" />
        </label>

        <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-purple-400">
          <input
            type="radio"
            name="color"
            value="purple"
            checked={localSettings.color === "purple"}
            onChange={() => setSetting("color", "purple")}
            className="hidden peer"
          />
          <FontAwesomeIcon icon={faCheck} className="opacity-0 peer-checked:opacity-100 text-[16px]" />
        </label>
      </div>
    </div>
  );
}

export default ColorSettings;