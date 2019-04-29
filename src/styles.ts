import StyleSheet from './utils/style-sheet';

const styleSheet = new StyleSheet({});
styleSheet.inject();

export function add(styles: string): void {
  styleSheet.insert(styles);
}

export function getAll(): string {
  // Convert rules array to a string
  return styleSheet
    .rules()
    .reduce(
      (combinedRules: string, rule: { cssText: string }) =>
        combinedRules + rule.cssText,
      ''
    );
}

export function clear(): void {
  styleSheet.flush();
  styleSheet.inject();
}
