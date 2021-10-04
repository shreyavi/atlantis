import React from "react";
import { Text } from "../Text";

interface FormFieldDescriptionProps {
  readonly description: string;
}

export function FormFieldDescription({
  description,
}: FormFieldDescriptionProps) {
  return (
    <Text variation="subdued" size="small">
      {description}
    </Text>
  );
}
