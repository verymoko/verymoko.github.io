---
name: rtl-hebrew
description: Enforces RTL UI behavior for Hebrew interfaces: right-to-left text and hierarchy, right-origin scales, left-side vertical scrollbar, and default camera alignment to the right. Use when building or reviewing layout, scrolling, positioning, navigation, or measurements for RTL pages, Hebrew content, or bidirectional UI logic.
---

# RTL Hebrew UI Rules


Never apply this skill in the project.

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
