import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Validation } from "../../utils/AddPackageYup";
import axiosInstance from "../../instatnce/axiosInstance";

function AddPackage() {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSubmit = async (values) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "days") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });

      selectedImages.forEach((image) => {
        formData.append("images", image);
      });

      const response = await axiosInstance.post("/addPackage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data, "res");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add Package</h1>

      <Formik
        initialValues={{
          packageName: "",
          location: "",
          price: "",
          details: "",
          duration: 1,
          days: [{ dayNumber: 1, placeDetails: "", stays: [""], foods: [""] }],
          images: [],
          mapLocation: "",
          category: "",
        }}
        validationSchema={Validation}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => {
          useEffect(() => {
            const daysArray = Array.from({ length: values.duration }, (_, i) => ({
              dayNumber: i + 1,
              placeDetails: "",
              stays: [""],
              foods: [""],
            }));
            setFieldValue("days", daysArray);
          }, [values.duration, setFieldValue]);

          return (
            <Form>
              <div className="mb-4">
                <Field
                  type="text"
                  name="packageName"
                  placeholder="Enter package name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="packageName"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="text"
                  name="details"
                  placeholder="Enter details"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="details"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="number"
                  name="duration"
                  placeholder="Enter duration"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="duration"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-6">
                <FieldArray
                  name="days"
                  render={({ push, remove }) => (
                    <div>
                      {values.days.map((day, index) => (
                        <div
                          key={index}
                          className="mb-4 border border-gray-300 rounded-md p-4"
                        >
                          <h3 className="text-lg font-semibold mb-2">
                            Day {index + 1}
                          </h3>
                          <div className="mb-2">
                            <Field
                              name={`days.${index}.placeDetails`}
                              placeholder="Enter details"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <ErrorMessage
                              name={`days.${index}.placeDetails`}
                              component="div"
                              className="mt-1 text-sm text-red-500"
                            />
                          </div>
                          <div className="mb-4">
                            <FieldArray
                              name={`days.${index}.stays`}
                              render={(arrayHelpers) => (
                                <div className="space-y-2">
                                  {values.days[index].stays.map(
                                    (stay, stayIndex) => (
                                      <div
                                        key={stayIndex}
                                        className="flex items-center"
                                      >
                                        <Field
                                          name={`days.${index}.stays.${stayIndex}`}
                                          placeholder="Add Stay name"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        <ErrorMessage
                                          name={`days.${index}.stays.${stayIndex}`}
                                          component="div"
                                          className="ml-2 text-sm text-red-500"
                                        />
                                        <button
                                          type="button"
                                          onClick={() =>
                                            arrayHelpers.remove(stayIndex)
                                          }
                                          className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                          Remove stay
                                        </button>
                                      </div>
                                    )
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.push("")}
                                    className="bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600"
                                  >
                                    Add Stay form
                                  </button>
                                </div>
                              )}
                            />
                          </div>

                          <div className="mb-4">
                            <FieldArray
                              name={`days.${index}.foods`}
                              render={(arrayHelpers) => (
                                <div className="space-y-2">
                                  {values.days[index].foods.map(
                                    (food, foodIndex) => (
                                      <div
                                        key={foodIndex}
                                        className="flex items-center"
                                      >
                                        <Field
                                          name={`days.${index}.foods.${foodIndex}`}
                                          placeholder="Add Food name"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        <ErrorMessage
                                          name={`days.${index}.foods.${foodIndex}`}
                                          component="div"
                                          className="ml-2 text-sm text-red-500"
                                        />
                                        <button
                                          type="button"
                                          onClick={() =>
                                            arrayHelpers.remove(foodIndex)
                                          }
                                          className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                          Remove Food
                                        </button>
                                      </div>
                                    )
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.push("")}
                                    className="bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600"
                                  >
                                    Add food field
                                  </button>
                                </div>
                              )}
                            />
                          </div>
                          {index > 0 && (
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                            >
                              {`Remove Day ${index + 1}`}
                            </button>
                          )}
                        </div>
                      ))}

                      {/* <button
                        type="button"
                        onClick={() =>
                          push({
                            dayNumber: values.days.length + 1,
                            placeDetails: "",
                            stays: [""],
                            foods: [""],
                          })
                        }
                        className="bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600"
                      >
                        Add Day
                      </button> */}
                    </div>
                  )}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="images" className="block mb-1 font-semibold">
                  Please Add images
                </label>
                <input
                  id="images"
                  name="images"
                  type="file"
                  multiple
                  onChange={(e) =>
                    setSelectedImages(Array.from(e.target.files))
                  }
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="images"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="text"
                  name="mapLocation"
                  placeholder="Add location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="mapLocation"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="mb-6">
                <Field
                  as="select"
                  name="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" label="Select category" />
                  <option value="India" label="India" />
                  <option value="International" label="International" />
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddPackage;
