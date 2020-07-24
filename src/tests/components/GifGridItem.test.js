import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem.js";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "Algo";
  const url = "https://localhost/imagen.png";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe mostrar el componente correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un parrafo con el title ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe tener una imagen con el src y el alt ", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
});
