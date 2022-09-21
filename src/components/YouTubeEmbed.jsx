import React from "react";
import { embedUrl } from "../utils/youTube";

const YouTubeEmbed = ({url}) => {
  if (!/embed/.test(url)) {
    url = embedUrl(url);
  }
  return (
    <iframe width="560" height="315" src={`${url}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  )
}

export default YouTubeEmbed;