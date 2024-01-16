import { Action, ActionPanel, List, closeMainWindow, popToRoot, showHUD } from "@raycast/api";
import { useExec } from "@raycast/utils";
import {
  RectangleProCommand,
  centerCommands,
  cornerCommands,
  fillCommands,
  fourthsCommands,
  halfCommands,
  maximizedCommands,
  moveCommands,
  sixthsCommands,
  sizeCommands,
  thirdsCommands,
} from "./commands";

export default function RectanglePro() {
  return (
    <List filtering={true} searchBarPlaceholder="RectanglePro commands">
      <List.Item
        title="Fill"
        actions={
          <ActionPanel>
            <Action.Push title="Push Pong" target={<Pong />} />
          </ActionPanel>
        }
      />

      <List.Section title="Halfs">
        {halfCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Corners">
        {cornerCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Thirds">
        {thirdsCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Maximize">
        {maximizedCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Size">
        {sizeCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Center">
        {centerCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Move">
        {moveCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Fill">
        {fillCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Fourth">
        {fourthsCommands.map((command) => (
          <Command key={command.id} command={command} />
        ))}
      </List.Section>

      <List.Section title="Sixths">
        {sixthsCommands.map((command) => (
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

  async function runCommand(hudTitle: string) {
    await showHUD(hudTitle);
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
            <Action title="Run Command" onAction={() => runCommand(command.title)} />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

function Pong() {
  return (
    <List filtering={true} searchBarPlaceholder="Fill">
      <List.Item
        title="Fill left"
        actions={
          <ActionPanel>
            <Action title="Fill Left" />
          </ActionPanel>
        }
      />
      <List.Item
        title="Fill right"
        actions={
          <ActionPanel>
            <Action title="Fill Right" />
          </ActionPanel>
        }
      />
    </List>
  );
}
