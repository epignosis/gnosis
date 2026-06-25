# Gnosis — AGENTS.md

Single source of truth for project conventions, operational notes, and AI-assistant guidance for **`@epignosis_llc/gnosis`**, Epignosis's official React design system.

## Project overview

Gnosis is an internal, opinionated **React component library + design-token package** — not an application. It ships reusable, themeable, accessible UI components (Button, Modal, Table, Drawer, form elements, etc.), a theming system built on Emotion, framework-agnostic design tokens, and an SVG icon set. It is consumed by Epignosis products (TalentLMS+, eFront, etc.) via npm.

The library has **three published entry points** (see `package.json#exports`):

- `@epignosis_llc/gnosis` — React components + theme.
- `@epignosis_llc/gnosis/tokens` and `/tokens.css` — framework-agnostic design tokens (zero React dependency; usable from Vue/Svelte/Angular/vanilla — see `DESIGN_TOKENS.md`).
- `@epignosis_llc/gnosis/icons` — SVG icon components.

Development happens in **Storybook** — there is no app shell. `npm start` boots Storybook on `localhost:6006` and every component documents its props there.

## How AI tools find these rules

This file (`AGENTS.md`) is the canonical source. Other files exist only as discovery affordances for specific tools:

- `CLAUDE.md` — symlink to `AGENTS.md` so Claude Code finds the rules under its preferred filename.
- `.github/copilot-instructions.md` — symlink to `AGENTS.md` so GitHub Copilot auto-loads the rules.

When you edit project conventions, edit `AGENTS.md`. There is no sync script — the symlinks make every tool see the same content. Do not duplicate these standards into the symlinked files.

## Running locally / operational caveats

- **Node version:** Node.js `>=20.19.0 || >=22.12.0` and npm `>=10.0.0` (see `package.json#engines`).
- **Install:** `npm install`.
- **Storybook is the dev surface:** `npm start` runs Storybook on `localhost:6006`. There is no dev app — to see or exercise a component, open its story.
- **macOS canvas build issues (Apple Silicon):** `canvas` is an optional dependency. If it fails to build:
  ```bash
  brew install pkg-config cairo pango libpng jpeg giflib librsvg
  npm install canvas --build-from-source
  sudo xcode-select -s /Applications/Xcode.app/Contents/Developer/
  ```
- **`validate` mirrors CI exactly:** `npm run validate` runs the same four steps, in the same order, as `.github/workflows/pr.yml` (check-types → eslint → prettier → test). Run it before opening a PR.

## Common commands

### Development

```bash
npm start                    # Storybook dev server on localhost:6006
npm run build                # Production build: tsc declarations + rollup (cjs/esm/types/tokens)
npm run build:design-system  # Build static Storybook into ./design-system
```

### Testing

```bash
npm test                     # Run Jest once
npm run test:watch           # Watch mode
npm run test:coverage        # With coverage report
```

### Single test execution (Jest filtering)

```bash
npm test -- src/components/Button/Button.test.tsx     # one file
npm test -- -t "renders correctly"                    # by test name
```

### Code quality

```bash
npm run check-types          # tsc --noEmit (tsconfig.check.json)
npm run eslint               # ESLint over src
npm run eslint:fix           # Auto-fix ESLint issues
npm run prettier             # Prettier --check over src
npm run prettier:format      # Prettier --write over src
npm run validate             # check-types && eslint && prettier && test (same order as CI)
```

### Releasing

```bash
npm run commit               # Commitizen-guided conventional commit (recommended)
npm run semantic-release      # Run by CI on merge — do not run manually
```

## Tech stack

- **Library:** React 18 component library written in **TypeScript 4.9** (peer dep `react`/`react-dom` `>=18.0.0`).
- **Styling:** **Emotion** CSS-in-JS (`@emotion/react`) via the `css` prop, driven by a typed theme.
- **Theming:** custom theme system; defaults in `src/theme/default/`, merged with consumer overrides via **`deepmerge`** in `ThemeProvider`.
- **Animations:** **Framer Motion** (`LazyMotion` + `m` for code-splitting — see `Button.tsx`).
- **Icons:** SVG files transformed to React components by **`@svgr/rollup`** / `vite-plugin-svgr`.
- **Notable deps:** `@tippyjs/react` (tooltips), `react-select`, `react-modal`, `react-focus-lock`, `react-spinners`, `ahooks`, `classnames`, `color`.
- **Build:** **Rollup 2** emits `dist/cjs`, `dist/esm`, `dist/types`, `dist/tokens`; `tsc` emits declarations.
- **Dev/docs:** **Storybook 10** (`@storybook/react-vite`, a11y + docs addons, Chromatic).
- **Testing:** **Jest 27** + React Testing Library + `@testing-library/jest-dom` + `@faker-js/faker` (transpiled by `babel-jest`).
- **Releases:** **semantic-release** driven by conventional commits.

## Architecture

### Folder structure

```
src/
├── index.ts            // The single public barrel — every exported component/token lives here
├── components/         // One folder per component (PascalCase)
│   └── Button/
│       ├── Button.tsx              // Component (PascalCase, default export)
│       ├── styles.ts               // Emotion style functions (theme in → SerializedStyles out)
│       ├── constants.ts            // Component-local constants / motion variants
│       ├── Button.stories.tsx      // Storybook documentation
│       ├── Button.test.tsx         // Co-located Jest + RTL tests
│       └── __snapshots__/          // Jest snapshots
├── theme/
│   ├── default/
│   │   ├── colors.ts               // Color palettes
│   │   ├── defaultTheme.ts         // Assembled GnosisTheme
│   │   └── config/<component>.ts   // Per-component theme config (button.ts, modal.ts, …)
│   ├── utils/                      // typography, global styles, helpers
│   ├── tokens.ts                   // Framework-agnostic design tokens
│   └── tokens.css                  // Tokens as CSS custom properties on :root
├── icons/              // SVG assets grouped by category, barrelled in index.ts
├── types/              // common.ts, utils.ts, emotion.d.ts (Theme augmentation), *.d.ts
└── test-utils/         // render (ThemeProvider wrapper), mocks, helpers
```

### Public exports

- Components are authored as **default exports** and re-exported as **named exports** from `src/index.ts` (e.g. `export { default as Button } from "./components/Button/Button"`). A new component is not public until it is added to this barrel.
- Most components do **not** have their own `index.ts` — they are referenced by full path from `src/index.ts`. (A few nested ones like `FormElements/ToggleSwitch` do; follow the neighbouring pattern.)
- Icons are exported as `XxxSVG` from `src/icons/index.ts` (which re-exports each category barrel).

### Path aliases (use these — never deep relative imports for these roots)

| Alias | Maps to |
|---|---|
| `@theme/*` | `src/theme/*` |
| `@test-utils/*` | `src/test-utils/*` |
| `types/*` | `src/types/*` (note: no leading `@`) |

Aliases are declared in `tsconfig.json#paths` and mirrored in `jest.config.cjs#moduleNameMapper` and the Rollup config. If you add an alias, update all three.

### Key patterns

**Component authoring**
- Function components only. Default-export the component; co-locate `styles.ts` and `constants.ts`.
- Accept a `className` prop and compose classes with **`classnames`** (see `Button.tsx`). Style state via class hooks (`&.disabled`, `&.active`) rather than prop-driven branching where the existing components do so.
- Polymorphic components use the `as` prop with `PolymorphicComponentProps<C, Props>` from `types/common` (see `Button`).
- Expose a stable `data-testid` for sub-elements that tests/consumers target (e.g. `prefix-icon`).

**Theming**
- Read theme values inside style functions: `css={(theme) => myStyles(theme, attrs)}`. Style functions take `Theme` (or a slice like `theme.button`) and return `SerializedStyles`.
- Component-tunable values live in `src/theme/default/config/<component>.ts` and are surfaced on the typed `Theme`. Add new theming knobs there — not as hardcoded literals in `styles.ts`.
- The `Theme` type is augmented in `src/types/emotion.d.ts` (`interface Theme extends GnosisTheme`). Extend `GnosisTheme` (via `defaultTheme.ts` / config files) when adding themeable surface.
- Consumers override the theme by passing a partial `theme` to `ThemeProvider`, which `deepmerge`s it over the default — so every new theme value must have a sensible default.

**Design tokens**
- Raw, framework-agnostic tokens live in `src/theme/tokens.ts` / `tokens.css` and ship under the `/tokens` and `/tokens.css` entry points. These must stay React-free. Document any token additions in `DESIGN_TOKENS.md` (it is published-facing).

**Icons**
- Add the `.svg` under the right `src/icons/<category>/` folder, then export it as `NameSVG` from that category's `index.ts`. SVGR turns it into a React component accepting `SVGProps<SVGSVGElement>` (size via `height`).

**RTL / logical properties**
- Use CSS **logical properties** (`margin-inline-start`, `inset-inline-start`, `padding-inline`, etc.) so components work in RTL out of the box — match existing components.

## Code conventions

### TypeScript

- Use `type` for type definitions in `.ts`/`.tsx`. `interface` is reserved for `.d.ts` global/module augmentation (e.g. the Emotion `Theme` extension) — the same exception ESLint already permits.
- Strict mode is on (`strict`, `noImplicitAny`, `strictNullChecks`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`). Prefix intentionally-unused params with `_`.
- Avoid `any` — prefer `unknown` or precise types. Components export their `Props` type so consumers get full typing.
- Prefer explicit return types on exported functions/components (`: ReactElement`, `: SerializedStyles`), matching existing code.

### React patterns

- Functional components with hooks only — no class components.
- `react/prop-types` is **disabled** — typing is via TypeScript `Props`, not PropTypes.
- Use `FC<Props>` or an explicit `(props): ReactElement` signature, matching the neighbouring component.
- Prefer `ReactNode` for `children`.

### Styling

- Emotion `css` prop only. Keep complex styles in `styles.ts` as functions that receive `Theme`.
- Pull values from the theme/tokens — do not hardcode colors, spacing, radii, or z-index that already exist as tokens.
- Use logical properties for RTL safety (see above).
- Storybook is the visual contract: components ship with stories covering their variants/states.

### Import order (enforced by ESLint `import/order`, `newlines-between: never`)

Keep imports in a single block with **no blank lines between groups** — React/external libraries, then internal modules, then types. Match the ordering in existing files; run `npm run eslint:fix` to normalize.

### File naming

- Components: `PascalCase.tsx` (e.g. `Button.tsx`).
- Styles: `styles.ts` (co-located, not `componentName.styles.ts`).
- Constants: `constants.ts`.
- Stories: `ComponentName.stories.tsx`.
- Tests: `ComponentName.test.tsx` (components) / `*.test.ts` (plain functions) — co-located or under `__tests__/`.
- Utilities/helpers: `camelCase.ts`.
- Theme config: `camelCase.ts` under `src/theme/default/config/`.

## Testing

- **Runner:** Jest 27. **Component testing:** React Testing Library. **Matchers:** `@testing-library/jest-dom` (loaded via `setupFilesAfterEnv` in `jest.config.cjs`).
- **Globals:** `describe`, `it`, `expect`, `jest`, `beforeEach`, `afterEach` are global — **do not import them**. You **do** import `React`, `userEvent`, `faker`, and the component under test.
- **Render:** `import { render, screen } from "@test-utils/render";` — this wraps the tree in `ThemeProvider`. Never call RTL `render` directly (components need theme context).
- **Location:** co-located `ComponentName.test.tsx` next to the source, or under `__tests__/`. Jest matches both (`jest.config.cjs#testMatch`).
- **What to test:** rendering, prop variants, user interactions (`userEvent`), accessibility (roles/labels), conditional states. Avoid asserting implementation details or exact CSS.
- **Snapshots:** critical components keep a snapshot (`expect(container).toMatchSnapshot()`); update intentional changes with `npm test -- -u` and review the diff.
- **Test IDs:** target sub-elements via `data-testid` exposed by the component.
- CSS and SVG imports are stubbed in tests (`src/test-utils/mocks/`).

## Git, commits & releases

- **Conventional commits are mandatory** — they drive `semantic-release` versioning and the changelog. Use `npm run commit` (Commitizen) to be guided through the format.
- Types: `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`. Scope the component where it helps (e.g. `feat(Button): add link variant`).
- **PRs are squash-merged**, so individual commits are discarded — **the PR title must itself be a valid conventional-commit subject** (it becomes the release commit). Good: `feat(SegmentedButtons): introduce segmented buttons`. Bad: `new tests`.
- Branch from `main` (e.g. `feat/new-feature`). PRs target `main` (or `beta`).
- Include screenshots / a description of what you tested in the PR (see `CONTRIBUTING.md` and the PR template).
- Only the core team merges PRs.

## Code quality rules

- **No `console.*`** — `no-console` is an ESLint **error**.
- No unused imports/locals/params (TS + ESLint enforce this).
- Follow ESLint and Prettier strictly — never ignore warnings; CI re-runs both.
- **Prettier config:** `printWidth: 100`, double quotes, `trailingComma: "all"`, `arrowParens: "always"`. Run `npm run prettier:format`.
- Meaningful names; return early; template literals over concatenation.

## Development workflow

1. Branch from `main`.
2. Build the component/feature with co-located `styles.ts`, `constants.ts`, a story, and tests.
3. Add new public surface to `src/index.ts` (and `DESIGN_TOKENS.md` if you touched tokens).
4. Keep theming in `src/theme/default/config/` with sensible defaults.
5. Run `npm run validate` (mirrors CI) until green.
6. Commit with `npm run commit`; open a PR with a conventional-commit title and screenshots.

## Anti-patterns to avoid

- ❌ Class components — functional components only.
- ❌ Hardcoded colors/spacing/radii/z-index that already exist as theme tokens.
- ❌ `console.*` statements (ESLint error).
- ❌ `any` types — use `unknown` or precise types.
- ❌ `interface` outside `.d.ts` augmentation.
- ❌ Importing Jest globals (`describe`/`it`/`expect`/`jest`).
- ❌ Rendering test components without the `@test-utils/render` wrapper.
- ❌ Physical CSS properties (`margin-left`/`right`) where a logical property keeps RTL working.
- ❌ Adding React dependencies to the `/tokens` entry point — it must stay framework-agnostic.
- ❌ Shipping a component without a Storybook story.
- ❌ Vague PR titles — they become the squashed release commit.
- ❌ Ignoring ESLint/Prettier warnings.

## Documentation map

- `README.md` — install, `ThemeProvider` usage, theme customization, icons.
- `DESIGN_TOKENS.md` — published-facing token reference and multi-framework usage.
- `CONTRIBUTING.md` — branch/PR/commit workflow.
- `CHANGELOG.md` — generated by semantic-release.
- `src/index.ts` — the authoritative list of public exports.
- Storybook (`npm start`) — live component docs, props, and variants.
