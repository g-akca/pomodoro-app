import closeIcon from "/assets/icon-close.svg";

function SettingsModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-blue-950 z-40 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-140 rounded-[15px] flex flex-col gap-4">
        <div className="flex justify-between py-4 px-6 border-b border-grey-200">
          <h1 className="text-[28px] leading-base font-bold text-blue-900">Settings</h1>

          <button type="button" onClick={closeModal}>
            <img src={closeIcon} alt="Close icon" />
          </button>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default SettingsModal;