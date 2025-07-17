"use client";

import React, { useState } from "react";
import Footer from "@/components/footer";
import { Button } from "@/components/shadcn-ui/button";
import { Card, CardContent } from "@/components/shadcn-ui/card";
import { Input } from "@/components/shadcn-ui/input";
import { Textarea } from "@/components/shadcn-ui/textarea";
import { Label } from "@/components/shadcn-ui/label";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [royaltyFee, setRoyaltyFee] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [royaltyError, setRoyaltyError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const supportedTypes = ["image/", "video/", "audio/"];
      const isSupported = supportedTypes.some((type) =>
        file.type.startsWith(type)
      );

      if (!isSupported) {
        setError("Unsupported file type. Please select an image, video, or audio file.");
        setSelectedFile(null);
        setPreviewUrl(null);
        return;
      }

      setError(null);
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRoyaltyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRoyaltyFee(value);

    const numericValue = parseFloat(value);
    if (numericValue > 10) {
      setRoyaltyError("Royalty fee cannot exceed 10%.");
    }
    else if (numericValue < 0) {
      setRoyaltyError("Royalty fee cannot be less than 0%.");
    } 
    else {
      setRoyaltyError(null);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    if (!title || !description || !royaltyFee || !price) {
      alert("Please fill in all fields before uploading.");
      return;
    }

    const numericRoyalty = parseFloat(royaltyFee);
    if (numericRoyalty > 10) {
      alert("Royalty fee cannot exceed 10%.");
      return;
    }

    // You would normally send this to your API endpoint here
    console.log("Uploading NFT with data:", {
      file: selectedFile,
      title,
      description,
      royaltyFee: numericRoyalty,
      price,
      tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
    });

    // Example: reset after upload
    setSelectedFile(null);
    setPreviewUrl(null);
    setTitle("");
    setDescription("");
    setRoyaltyFee("");
    setPrice("");
    setTags("");
    setError(null);
    setRoyaltyError(null);
    alert("NFT uploaded (simulated)!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-lg shadow-lg">
          <CardContent className="flex flex-col gap-4 p-6">
            <h2 className="text-2xl font-bold text-center">Upload NFT</h2>

            <input
              type="file"
              accept="image/*,video/*,audio/*"
              onChange={handleFileChange}
              className="w-full file:mr-4 file:py-2 file:px-4
                         file:rounded file:border-0
                         file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700
                         hover:file:bg-blue-100"
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {previewUrl && (
              <>
                {selectedFile?.type.startsWith("image/") ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full rounded-lg shadow"
                  />
                ) : selectedFile?.type.startsWith("video/") ? (
                  <video
                    src={previewUrl}
                    controls
                    className="w-full rounded-lg shadow"
                  />
                ) : selectedFile?.type.startsWith("audio/") ? (
                  <audio
                    src={previewUrl}
                    controls
                    className="w-full"
                  />
                ) : null}
              </>
            )}

            {/* Title */}
            <div className="w-full">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter NFT title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="w-full">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your NFT"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Royalty fee */}
            <div className="w-full">
              <Label htmlFor="royalty">Royalty Fee (%)</Label>
              <Input
                id="royalty"
                type="number"
                placeholder="e.g., 5"
                value={royaltyFee}
                onChange={handleRoyaltyChange}
              />
              {royaltyError && (
                <p className="text-red-500 text-sm mt-1">{royaltyError}</p>
              )}
            </div>

            {/* Price */}
            <div className="w-full">
              <Label htmlFor="price">Price (ETH)</Label>
              <Input
                id="price"
                type="number"
                placeholder="e.g., 0.05"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {/* Tags */}
            <div className="w-full">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                placeholder="e.g., art, music, 3D"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <Button onClick={handleUpload} className="w-full mt-2">
              Upload NFT
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
