---
name: rtl-hebrew
description: Applies RTL UI behavior for Hebrew interfaces when Hebrew/RTL is explicitly requested or implied by context.
---

# RTL Hebrew UI Rules


## Activation Rules

Apply this skill only when the target UI language is Hebrew or the user explicitly requests RTL behavior.

Do not apply this skill for Russian or other non-RTL interfaces unless the user explicitly asks for RTL.

Project-specific defaults:
- `index.html`: apply by default (Hebrew/RTL concept).
- `schedule.html` and `combined days.html`: do not apply by default.

If language or direction is ambiguous, ask the user to confirm before applying RTL rules.

## Terms

- **Camera**: visible scrollable viewport area.
- **Camera at the top**: `scrollY = 0`.
- **Camera at tht bottom**: `scrollY = max`.
- **Camera at the start**: horizontal scroll value is minimal.

## Core Direction Rule

- Start is on the right.
- End is on the left.
- Treat this as default for layout, alignment, progression, scroll-position and navigation unless user explicitly says otherwise.

## RTL Rules

1. Text direction is right-to-left.
   - Set `dir="rtl"` at page or container level for Hebrew UI.
   - Keep Hebrew text flow and punctuation behavior consistent with RTL.

2. Scales originate from the right.
   - Zero is on the right.
   - Increasing values move to the left.

3. Element hierarchy flows right-to-left.
   - Primary element is rightmost.
   - Then secondary to its left.
   - Then tertiary to its left.
   - Example order: avatar (right), title (middle), regular text (left).

4. Vertical scrollbar is at the end side.
   - For RTL, end side is left.
   - Place or expect vertical scrollbar on the left.

5. Default camera horizontal position is right.
   - Initial viewport should open at right side for horizontal scroll contexts.

## Implementation Checklist

- [ ] Container/page has RTL direction (`dir="rtl"` or equivalent CSS strategy).
- [ ] Horizontal ordering is mirrored to right-to-left semantics.
- [ ] Numeric/progress scales start at right edge.
- [ ] Vertical scrollbar behavior matches left-side end position in RTL.
- [ ] Initial horizontal viewport/camera position is rightmost.

## Review Heuristics

When reviewing RTL UI changes:

- Flag left-to-right assumptions in spacing, alignment, ordering, or animations.
- Flag scales that increase left-to-right.
- Flag default camera initialization that starts from left.
- Confirm Hebrew readability after any layout or typography change.
