"use client";

import { useActionState } from "react";
import { subscribeUser } from "@/app/actions/subscribeUser";

const initialState = {
  message: "",
  success: false,
};

export default function SubscribeForm() {
  const [state, formAction, pending] = useActionState(
    subscribeUser,
    initialState
  );

  return (
    <form className="w-full max-w-md" action={formAction}>
      <div className="flex gap-x-4">
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="email"
          className="min-w-0 flex-auto rounded-md border-0 bg-white/60 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          disabled={pending}
          className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Subscribing.." : "Notify me"}
        </button>
      </div>
      {state.message && (
        <p
          className={`mt-2 text-sm text-gray-200 `}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
