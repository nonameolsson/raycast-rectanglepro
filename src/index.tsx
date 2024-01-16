import { Action, ActionPanel, List, closeMainWindow, popToRoot } from "@raycast/api";
import { useExec } from "@raycast/utils";
import { RectangleProCommand, commands } from "./commands";

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
  const executeActionUrl = `open -g "rectangle-pro://execute-action?name=${command.command}"`;

  const { revalidate } = useExec(executeActionUrl, {
    execute: false,
    shell: true,
  });

  function runCommand() {
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
