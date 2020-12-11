<?php

// Get array from json
$string = file_get_contents("./json-parser/messages.json");
$messages = json_decode($string, false);

// Setup empty articles array
$articles = array();

foreach ($messages as $message) {
    // Check if the object has an attachments property, and if not skip to next one
    if (!property_exists($message, "attachments")) continue;
    // Push the needed fields to the articles array
    array_push($articles, [
        "title" => $message->attachments[0]->title,
        "link" => $message->attachments[0]->title_link,
        "image_url" => $message->attachments[0]->image_url
    ]);
}

echo json_encode($articles);

?>
