"use client";

import { useState } from "react";
import { CommonCardLayout } from "../CommonCardLayout";
import { LabeledInput } from "./LabelInput";
import { SectionLAbel } from "./SectionLabel";
import { MdDelete } from "react-icons/md";

export const ProductsForm = () => {
  const [discountType, setDiscountType] = useState("No Discount");
  const [taxClass, setTaxClass] = useState("Tax Free");
  const [category, setCategory] = useState("Watch");
  const [tags, setTags] = useState(["Watch", "Gadget"]);
  const [status, setStatus] = useState("Published");

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  const [variations, setVariations] = useState([
    { type: "Color", value: "Black" },
    { type: "Color", value: "Gray" },
  ]);

  const addVariation = () => {
    setVariations([...variations, { type: "Color", value: "" }]);
  };

  const removeVariation = (index: number) => {
    setVariations(variations.filter((_, i) => i !== index));
  };

  const handleVariationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newVariations = [...variations];
    newVariations[index][field as keyof (typeof newVariations)[number]] = value;
    setVariations(newVariations);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
      <div className="md:col-span-12 xl:col-span-8">
        <CommonCardLayout className="flex flex-col gap-3">
          <SectionLAbel text="Genaral Information" />
          <LabeledInput text="Product Name">
            <input
              className="bg-[#F9F9FC] outline-0 rounded-lg w-full p-2 border-0 border-gray-400"
              placeholder="Product Name"
            />
          </LabeledInput>
          <LabeledInput text="Description">
            <textarea
              className="bg-[#F9F9FC] h-32 outline-0 rounded-lg w-full p-2 border-0 border-gray-400"
              placeholder="Product Name"
            />
          </LabeledInput>
        </CommonCardLayout>
      </div>
      <div className="md:col-span-12 xl:col-span-4 ">
        <div className="flex flex-col gap-3">
          {/* Category Section */}
          <CommonCardLayout>
            <div className="w-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Category
              </h2>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Watch">Watch</option>
                  <option value="Phone">Phone</option>
                  <option value="Laptop">Laptop</option>
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  ▼
                </span>
              </div>

              {/* Product Tags */}
              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-1">
                  Product Tags
                </label>
                <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 text-blue-600 hover:text-blue-800"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                  <select
                    onChange={(e) => {
                      const newTag = e.target.value;
                      if (newTag && !tags.includes(newTag)) {
                        setTags([...tags, newTag]);
                      }
                    }}
                    className="appearance-none bg-transparent focus:outline-none text-gray-400"
                  >
                    <option value="">Add tag...</option>
                    <option value="Smart">Smart</option>
                    <option value="Tech">Tech</option>
                    <option value="Accessory">Accessory</option>
                  </select>
                </div>
              </div>
            </div>
          </CommonCardLayout>
          <CommonCardLayout>
            {" "}
            {/* Status Section */}
            <div className="w-full">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Status
                </h2>
                {status === "Published" && (
                  <span className="h-fit bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    Published
                  </span>
                )}
              </div>
              <div className="relative">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  ▼
                </span>
              </div>
            </div>
          </CommonCardLayout>
        </div>
      </div>
      <div className="md:col-span-12 xl:col-span-8">
        <CommonCardLayout className="flex flex-col gap-3">
          <SectionLAbel text="Genaral Information" />
          <LabeledInput text="Product Name">
            <input
              className="bg-[#F9F9FC] outline-0 rounded-lg w-full p-2 border-0 border-gray-400"
              placeholder="Product Name"
            />
          </LabeledInput>
          <LabeledInput text="Description">
            <input
              className="bg-[#F9F9FC] outline-0 rounded-lg w-full p-2 border-0 border-gray-400"
              placeholder="Product Name"
            />
          </LabeledInput>
        </CommonCardLayout>
      </div>
      <div className="md:col-span-12 xl:col-span-8">
        <CommonCardLayout className="flex flex-col gap-3">
          <SectionLAbel text="Media" />
          <LabeledInput text="Photo">
            <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
              {/* Placeholder Boxes */}
              <div className="flex space-x-4 mb-4">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="size-20 bg-gray-100 rounded-lg flex items-center justify-center relative"
                  >
                    <div className="absolute top-2 right-2 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* Drag and Drop Text */}
              <p className="text-gray-500 mb-4">
                Drag and drop image here, or click add image
              </p>

              {/* Add Image Button */}
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition">
                Add Image
              </button>
            </div>
          </LabeledInput>
          <LabeledInput text="Description">
            <input
              className="bg-[#F9F9FC] outline-0 rounded-lg w-full p-2 border-0 border-gray-400"
              placeholder="Product Name"
            />
          </LabeledInput>
        </CommonCardLayout>
      </div>
      <div className="md:col-span-12 xl:col-span-8">
        <CommonCardLayout className="w-full">
          <div className=" w-full mx-auto ">
            <SectionLAbel text=" Pricing" />

            {/* Base Price */}
            <div className="mb-4">
              <LabeledInput text="Product Name">
                <input
                  type="text"
                  value="$400.00"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  readOnly
                />
              </LabeledInput>
            </div>

            {/* Discount Type and Discount Percentage */}
            <div className="flex md:flex-row gap-2 flex-col w-full space-x-4 mb-4">
              {/* Discount Type */}
              <div className="md:w-1/2 w-full">
                <LabeledInput text="Discount Type">
                  <select
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value)}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none"
                  >
                    <option>No Discount</option>
                    <option>Percentage</option>
                    <option>Fixed Amount</option>
                  </select>
                </LabeledInput>
              </div>

              {/* Discount Percentage */}
              <div className="md:w-1/2">
                <LabeledInput text=" Discount Percentage (%)">
                  <input
                    type="text"
                    value="0%"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    readOnly
                  />
                </LabeledInput>
              </div>
            </div>

            {/* Tax Class and VAT Amount */}
            <div className="flex md:flex-row flex-col gap-2 space-x-4 w-full">
              {/* Tax Class */}
              <div className="md:w-1/2">
                <LabeledInput text="Tax Class">
                  <select
                    value={taxClass}
                    onChange={(e) => setTaxClass(e.target.value)}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none"
                  >
                    <option>Tax Free</option>
                    <option>Taxable</option>
                  </select>
                </LabeledInput>
              </div>

              {/* VAT Amount */}
              <div className="md:w-1/2">
                <LabeledInput text="VAT Amount (%)">
                  <input
                    type="text"
                    value="0%"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    readOnly
                  />
                </LabeledInput>
              </div>
            </div>
          </div>
        </CommonCardLayout>
      </div>
      <div className="md:col-span-12 xl:col-span-8">
        <CommonCardLayout>
          {/* Inventory Section */}
          <div className="bg-white w-full rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Inventory
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  SKU
                </label>
                <input
                  type="text"
                  value="302002"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Barcode
                </label>
                <input
                  type="text"
                  value="0984939101123"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  value="124"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
            </div>
          </div>
        </CommonCardLayout>
      </div>
      <div className="md:col-span-12 xl:col-span-8">
        <CommonCardLayout>
          <div className="bg-white w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Variation
            </h3>
            {variations.map((variation, index) => (
              <div key={index} className="flex gap-4 mb-3 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Variation Type
                  </label>
                  <select
                    value={variation.type}
                    onChange={(e) =>
                      handleVariationChange(index, "type", e.target.value)
                    }
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Color">Color</option>
                    <option value="Size">Size</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Variation
                  </label>
                  <input
                    type="text"
                    value={variation.value}
                    onChange={(e) =>
                      handleVariationChange(index, "value", e.target.value)
                    }
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter variation"
                  />
                </div>
                <button
                  onClick={() => removeVariation(index)}
                  className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                >
                  <MdDelete className="size-4" />
                </button>
              </div>
            ))}
            <button
              onClick={addVariation}
              className="mt-2 text-blue-500 hover:text-blue-600 font-medium"
            >
              + Add Variant
            </button>
          </div>
        </CommonCardLayout>
      </div>
      <div className="md:col-span-12 xl:col-span-8">
        <CommonCardLayout>
          <div className="bg-white rounded-lg w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Shipping
            </h3>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked
                className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                readOnly
              />
              <label className="ml-2 text-sm text-gray-600">
                This is a physical product
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Weight
                </label>
                <input
                  type="text"
                  value="0.25 kg"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Height
                </label>
                <input
                  type="text"
                  value="10 cm"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Length
                </label>
                <input
                  type="text"
                  value="10 cm"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Width
                </label>
                <input
                  type="text"
                  value="7 cm"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
            </div>
          </div>
        </CommonCardLayout>
      </div>

      {/* Shipping Section */}
    </div>
  );
};
