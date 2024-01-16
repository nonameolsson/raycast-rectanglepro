export interface RectangleProCommand {
  id: number;
  title: string;
  subtitle: string;
  command: string;
}

export const halfCommands: RectangleProCommand[] = [
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
    title: "Bottom Half",
    subtitle: "Move window to bottom half of screen",
    command: "bottom-half",
  },
  {
    id: 4,
    title: "Top Half",
    subtitle: "Move window to top half of screen",
    command: "top-half",
  },
  {
    id: 5,
    title: "Center Half",
    subtitle: "Move window to center half of screen",
    command: "center-half",
  },
];

export const cornerCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "Bottom Left",
    subtitle: "Move window to bottom left of screen",
    command: "bottom-left",
  },
  {
    id: 2,
    title: "Bottom Right",
    subtitle: "Move window to bottom right of screen",
    command: "bottom-right",
  },
  {
    id: 3,
    title: "Top Left",
    subtitle: "Move window to top left of screen",
    command: "top-left",
  },
  {
    id: 4,
    title: "Top Right",
    subtitle: "Move window to top right of screen",
    command: "top-right",
  },
];

export const thirdsCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "First Third",
    subtitle: "Move window to first third of screen",
    command: "first-third",
  },
  {
    id: 2,
    title: "First Two Thirds",
    subtitle: "Move window to first two thirds of screen",
    command: "first-two-thirds",
  },
  {
    id: 3,
    title: "Center Third",
    subtitle: "Move window to center third of screen",
    command: "center-third",
  },
  {
    id: 4,
    title: "Center Two Thirds",
    subtitle: "Move window to center two thirds of screen",
    command: "center-two-thirds",
  },
  {
    id: 5,
    title: "Last Two Thirds",
    subtitle: "Move window to last two thirds of screen",
    command: "last-two-thirds",
  },
  {
    id: 6,
    title: "Last Third",
    subtitle: "Move window to last third of screen",
    command: "last-third",
  },
];

export const maximizedCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "Maximize",
    subtitle: "Maximize window",
    command: "maximize",
  },
  {
    id: 2,
    title: "Maximize Height",
    subtitle: "Maximize window height",
    command: "maximize-height",
  },
  {
    id: 3,
    title: "Almost Maximize",
    subtitle: "Almost maximize window",
    command: "almost-maximize",
  },
  {
    id: 4,
    title: "Fullscreen",
    subtitle: "Make window fullscreen",
    command: "fullscreen",
  },
];

export const sizeCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "Larger",
    subtitle: "Increase window size",
    command: "larger",
  },
  {
    id: 2,
    title: "Smaller",
    subtitle: "Decrease window size",
    command: "smaller",
  },
];

export const centerCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "Center",
    subtitle: "Move window to center of screen",
    command: "center",
  },
  {
    id: 2,
    title: "Upper Center",
    subtitle: "Move window to upper center of screen",
    command: "top-center-sixth",
  },
];

export const fourthsCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "First Fourth",
    subtitle: "Move window to first fourth of screen",
    command: "first-fourth",
  },
  {
    id: 2,
    title: "Second Fourth",
    subtitle: "Move window to second fourth of screen",
    command: "second-fourth",
  },
  {
    id: 3,
    title: "Third Fourth",
    subtitle: "Move window to third fourth of screen",
    command: "third-fourth",
  },
  {
    id: 4,
    title: "Last Fourth",
    subtitle: "Move window to last fourth of screen",
    command: "last-fourth",
  },
  {
    id: 5,
    title: "First Three Fourths",
    subtitle: "Move window to first three fourths of screen",
    command: "first-three-fourths",
  },
  {
    id: 6,
    title: "Last Three Fourths",
    subtitle: "Move window to last three fourths of screen",
    command: "last-three-fourths",
  },
];

export const sixthsCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "First Sixth",
    subtitle: "Move window to first sixth of screen",
    command: "first-sixth",
  },
  {
    id: 3,
    title: "Last Sixth",
    subtitle: "Move window to last sixth of screen",
    command: "last-sixth",
  },

  {
    id: 4,
    title: "Top Left Sixth",
    subtitle: "Move window to top left sixth of screen",
    command: "top-left-sixth",
  },
  {
    id: 5,
    title: "Top Center Sixth",
    subtitle: "Move window to top center sixth of screen",
    command: "top-center-sixth",
  },
  {
    id: 6,
    title: "Top Right Sixth",
    subtitle: "Move window to top right sixth of screen",
    command: "top-right-sixth",
  },
  {
    id: 7,
    title: "Bottom Left Sixth",
    subtitle: "Move window to bottom left sixth of screen",
    command: "bottom-left-sixth",
  },
  {
    id: 8,
    title: "Bottom Center Sixth",
    subtitle: "Move window to bottom center sixth of screen",
    command: "bottom-center-sixth",
  },
  {
    id: 9,
    title: "Bottom Right Sixth",
    subtitle: "Move window to bottom right sixth of screen",
    command: "bottom-right-sixth",
  },
];

export const fillCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "Fill Left",
    subtitle: "Fill left half of screen with window",
    command: "fill-left",
  },
  {
    id: 2,
    title: "Fill Right",
    subtitle: "Fill right half of screen with window",
    command: "fill-right",
  },
];

export const moveCommands: RectangleProCommand[] = [
  {
    id: 1,
    title: "Move Left",
    subtitle: "Move window to the left",
    command: "move-left",
  },
  {
    id: 2,
    title: "Move Right",
    subtitle: "Move window to the right",
    command: "move-right",
  },
  {
    id: 3,
    title: "Move Up",
    subtitle: "Move window up",
    command: "move-up",
  },
  {
    id: 4,
    title: "Move Down",
    subtitle: "Move window down",
    command: "move-down",
  },
];
