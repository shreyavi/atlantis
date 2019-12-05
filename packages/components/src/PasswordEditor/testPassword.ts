import zxcvbn from "zxcvbn";

export function testPassword(
  password: string,
): {
  score: number;
  suggestion: string;
  warning: string;
} {
  const {
    score,
    feedback: {
      warning,
      suggestions: [suggestion],
    },
  } = zxcvbn(password);
  return { score, suggestion, warning };
}