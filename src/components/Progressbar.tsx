import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  max: number;
  label?: string;
  showValues?: boolean;
}

const ProgressBar = ({ current, max, label, showValues = true }: ProgressBarProps) => {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div className="space-y-2">
      {(label || showValues) && (
        <div className="flex justify-between items-center text-sm">
          {label && <span className="text-muted-foreground">{label}</span>}
          {showValues && (
            <span className="font-semibold">
              {current.toLocaleString()} / {max.toLocaleString()}
            </span>
          )}
        </div>
      )}
      <Progress 
        value={percentage} 
        className="h-3 bg-muted"
      />
    </div>
  );
};

export default ProgressBar;