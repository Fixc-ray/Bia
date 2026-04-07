export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">

      {/* MODAL BOX */}
      <div className="bg-[#11120D] text-[#D8CFBC] w-[90%] max-w-4xl rounded-2xl border border-[#565449]/40 shadow-2xl relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#D8CFBC] hover:text-[#FFFBF4]"
        >
          ✕
        </button>

        {/* CONTENT */}
        <div className="p-8">
          <h2 className="text-2xl text-[#FFFBF4] mb-4">
            {content.title}
          </h2>

          <p className="text-sm text-[#D8CFBC]/70 mb-6">
            {content.description}
          </p>

          {/* PDF VIEWER */}
          <iframe
            src={content.pdf}
            title="PDF"
            className="w-full h-[400px] rounded-lg border border-[#565449]/30"
          />

          {/* DOWNLOAD */}
          <a
            href={content.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 border border-[#565449] rounded-full text-sm hover:bg-[#D8CFBC]/10 transition"
          >
            Download PDF →
          </a>
        </div>

      </div>
    </div>
  );
}