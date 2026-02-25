/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates a YouTube Embed component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.id - The YouTube video ID.
 * @returns {import('mdast').Parent} The created YouTube Embed component.
 */
export function YoutubeComponent(properties) {
    if (!properties.id) {
        return h("div", { class: "text-red-500 italic" }, "Missing YouTube video ID.");
    }

    return h("div", { class: "relative w-full aspect-video rounded-xl overflow-hidden my-6 shadow-lg" }, [
        h("iframe", {
            src: `https://www.youtube.com/embed/${properties.id}`,
            class: "absolute inset-0 w-full h-full border-0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowfullscreen: true
        })
    ]);
}

/**
 * Creates a Spotify Embed component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.id - The Spotify track/album/playlist ID.
 * @param {string} [properties.type='track'] - The type of content (track, album, playlist).
 * @returns {import('mdast').Parent} The created Spotify Embed component.
 */
export function SpotifyComponent(properties) {
    if (!properties.id) {
        return h("div", { class: "text-red-500 italic" }, "Missing Spotify ID.");
    }

    const type = properties.type || "track";
    return h("div", { class: "my-6 rounded-xl overflow-hidden shadow-lg bg-transparent" }, [
        h("iframe", {
            src: `https://open.spotify.com/embed/${type}/${properties.id}`,
            width: "100%",
            height: type === 'track' ? "152" : "352",
            frameBorder: "0",
            allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
            loading: "lazy",
            style: "border-radius: 12px;"
        })
    ]);
}
