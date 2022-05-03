import { CloseButton } from "../CloseButton/CloseButton";

import bugImage from "../../assets/bug.svg"
import ideaImage from "../../assets/idea.svg"
import thoughtImage from "../../assets/thought.svg"
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  "BUG": {
    "title": "Problema",
    "image": {
      "src": bugImage,
      "alt": "Um inseto (bug), representando um problema"
    }
  },
  "IDEA": {
    "title": "Ideia",
    "image": {
      "src": ideaImage,
      "alt": "Uma lâmpada, representando uma nova ideia"
    }
  },
  "OTHER": {
    "title": "Outro",
    "image": {
      "src": thoughtImage,
      "alt": "Uma nuvem de pensamento"
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto] text-txt-100">

      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <FeedbackTypeStep setFeedbackType={setFeedbackType} />

      <footer className="text-xs text-txt-300">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com">Rocketseat</a>
      </footer>
    </div>
  )
}