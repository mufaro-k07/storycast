# Replacing the Synthetic Narration

> **Status (17 October 2026): done.** Both human recordings are integrated. The creator recorded their own wording rather than these scripts word for word, so the captions and transcripts follow the recordings, not scripts 1 and 2.
> - **Homepage:** `assets/audio/homepage-introduction-human.m4a`.
> - **Video:** the explainer was rebuilt around `assets/audio/story-detail-narration-human.m4a`.

The current audio and video use a synthetic voice (Microsoft Hazel, Windows text-to-speech). Keep them in place until the human recordings are ready, checked and integrated.

## What to hand over

- **Homepage audio:** one file for the homepage audio introduction (WAV or MP3).
- **Video narration:** seven files for the video narration, `scene-1` to `scene-7`.

## Homepage audio: steps

1. Check the real duration of the new file.
2. Replace the `<source>` in `index.html` (`#listen`), and update the `type` (`audio/wav` or `audio/mpeg`) and the fallback download link.
3. Update the duration shown in the figure caption ("43 seconds").
4. Recalculate the four paragraph timestamps in the homepage transcript and in `assets/transcripts/audio-introduction-transcript.txt`.
5. Check that the transcript still matches the spoken words exactly.
6. Replace "Narrated by a synthetic voice" with a credit for the human narrator, both on the page and in the `.txt` file.
7. Test playback in a browser.

## StoryCast video: steps

The narration is part of the MP4 itself, so the video has to be rebuilt. Swapping a file is not enough.

1. Measure each scene recording.
2. Rebuild the video so each scene appears as its narration starts. The scenes and illustrations stay the same, and the total length will change.
3. Recalculate every WebVTT cue in `assets/captions/race-explainer.vtt` from the new audio. **Do not reuse the current timings.**
4. Update the scene timestamps in the story page transcript (`#transcript`) and in `assets/transcripts/race-explainer-transcript.txt`.
5. Update the stated length ("90-second") in the video caption if it changes.
6. Update the voice credit in all of these places:
   - the video caption
   - the transcript note
   - the `.txt` header
   - the VTT `NOTE`
   - the end card, which currently says "Narration: synthetic voice"
7. Regenerate the poster frame if the title card changes.
8. Test:
   - playback, sound and duration
   - captions in sync at several points
   - keyboard controls
   - the transcript matches word for word
