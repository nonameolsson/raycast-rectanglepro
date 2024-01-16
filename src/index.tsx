import { Action, ActionPanel, List, closeMainWindow, popToRoot } from "@raycast/api";
import { useExec } from "@raycast/utils";

const commands: RectangleProCommand[] = [
  {
    id: 1,
    title: "Left Half",
    subtitle: "Move window to left half of screen",
    command: "left-half",
  },
  {
    id: 2,
    title: "Right Half",
    subtitle: "Move window to right half of screen",
    command: "right-half",
  },
  {
    id: 3,
    title: "Last Two Thirds",
    command: "last-two-thirds",
    subtitle: "Move window to last two thirds of screen",
  },
];

export default function RectanglePro() {
  return (
    <List filtering={true} searchBarPlaceholder="RectanglePro commands">
      <List.Section title="Be a Pro, a RectanglePro">
        {commands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>
    </List>
  );
}

function Command({ command }: { readonly command: RectangleProCommand }) {
  const { revalidate } = useExec(`open -g "rectangle-pro://execute-action?name=${command.command}"`, {
    execute: false,
    shell: true,
  });

  function runCommand() {
    console.log("runCommand");
    revalidate();
    closeMainWindow();
    popToRoot();
  }

  return (
    <List.Item
      title={command.title}
      subtitle={command.subtitle}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action title="Run Command" onAction={runCommand} />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

interface RectangleProCommand {
  id: number;
  title: string;
  subtitle: string;
  command: string;
}
