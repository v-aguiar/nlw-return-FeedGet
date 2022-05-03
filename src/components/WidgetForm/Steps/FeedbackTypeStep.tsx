import { FeedbackType, feedbackTypes } from ".."

interface FeedbackTypeStepProps {
  setFeedbackType: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ setFeedbackType }: FeedbackTypeStepProps) {
  return (
    <div className="flex gap-2 py-8 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            type="button"
            onClick={() => setFeedbackType(key as FeedbackType)}
            className="bg-[#27272A] rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:outline-none focus:border-brand-500">
            <img src={value.image.src} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        )
      })}
    </div>
  )
}