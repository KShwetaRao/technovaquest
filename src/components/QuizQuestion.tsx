import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const QuizQuestion = ({ question, options, correctAnswer, onAnswer }) => {
  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    if (!selected) return;
    onAnswer(selected === correctAnswer, selected);
  };

  return (
    <Card className="w-full max-w-xl mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{question}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <RadioGroup value={selected} onValueChange={setSelected}>
          {options.map((opt, i) => (
            <div key={i} className="flex items-center space-x-2">
              <RadioGroupItem id={`opt-${i}`} value={opt} />
              <Label htmlFor={`opt-${i}`}>{opt}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>

      <CardFooter>
        <Button disabled={!selected} onClick={handleSubmit} className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizQuestion;
