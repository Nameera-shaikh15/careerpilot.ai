import {
  Bot,
  User,
  Lightbulb,
  Smile,
  RefreshCw,
  HelpCircle,
} from "lucide-react";

import Card from "../Card";
import Button from "../Button";

function FriendMode() {
  return (
    <Card className="mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Smile
          size={34}
          className="text-yellow-400"
        />

        <h2 className="text-3xl font-bold">
          😊 Friend Mode
        </h2>

      </div>

      <p className="text-slate-400 mb-10">
        CareerPilot AI teaches exactly like a close friend or senior,
        making difficult concepts simple and memorable.
      </p>

      {/* AI Message */}

      <div className="flex gap-5 mb-8">

        <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">

          <Bot size={28} />

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 flex-1">

          <h3 className="font-bold text-cyan-400 mb-3">
            CareerPilot AI
          </h3>

          <p className="leading-8">

            Arre 😄 imagine you're standing in your college canteen.

            <br /><br />

            Plates are stacked one above another.

            <br /><br />

            Which plate do you remove first?

            <br /><br />

            Obviously the plate on the top!

            <br /><br />

            That's exactly how a <strong>Stack</strong> works.

            <br /><br />

            The last item added is the first item removed.

            <br /><br />

            Congratulations 🎉

            You already understand LIFO.

          </p>

        </div>

      </div>

      {/* Memory Trick */}

      <div className="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-4">

          <Lightbulb
            className="text-yellow-400"
            size={28}
          />

          <h3 className="text-2xl font-bold">

            Memory Trick

          </h3>

        </div>

        <p className="leading-8">

          🧠 Think of

          <br /><br />

          <strong>STACK = Store Things Above, Collect from the Top.</strong>

          <br /><br />

          Every time you hear Stack...

          Imagine a pile of plates 🍽️

        </p>

      </div>

      {/* Student */}

      <div className="flex gap-5 mt-10">

        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">

          <User size={28} />

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 flex-1">

          <h3 className="font-bold text-green-400 mb-3">
            You
          </h3>

          <p>
            Okay... I understood the example.
          </p>

        </div>

      </div>

      {/* AI asks */}

      <div className="mt-12">

        <h3 className="text-2xl font-bold mb-6">

          Did you understand?

        </h3>

        <div className="flex flex-wrap gap-5">

          <Button
            text="😊 Yes, Continue"
          />

          <Button
            text="🔄 Explain Differently"
            variant="secondary"
          />

          <Button
            text="🤔 Still Confused"
            variant="secondary"
          />

        </div>

      </div>

      {/* Extra Help */}

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        <div className="bg-slate-900 rounded-2xl p-6">

          <RefreshCw
            className="text-cyan-400 mb-4"
            size={30}
          />

          <h3 className="text-xl font-bold">

            Explain Another Way

          </h3>

          <p className="text-slate-400 mt-3">

            AI changes the teaching style instead of repeating
            the same explanation.

          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6">

          <HelpCircle
            className="text-yellow-400 mb-4"
            size={30}
          />

          <h3 className="text-xl font-bold">

            Ask Anything

          </h3>

          <p className="text-slate-400 mt-3">

            Ask doubts naturally just like talking to your best
            friend.

          </p>

        </div>

      </div>

    </Card>
  );
}

export default FriendMode;