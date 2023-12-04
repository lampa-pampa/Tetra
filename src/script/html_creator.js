/*----------------------------------------------------------------------------------------------------*/

/*                                           HTML CREATOR                                             */

/*----------------------------------------------------------------------------------------------------*/

class HTMLCreator
{
    line(type)
    {
        return `<img src="${get_src("main", "line")}" class="line ${type}"></img>`
    }

    button(src, onclick, id = "", cls = "")
    {
        return `<img src="${src}" onclick="${onclick}" ${id != "" ? ("id=" + id) : ""} class="button ${cls}"></img>`
    }

    touch_button(src, onpointerdown, cls)
    {
        return `<img src="${src}" onpointerdown="${onpointerdown}" class="button ${cls}"></img>`
    }

    property(src, id, onclick)
    {
        return `<div class="property">
        <img src="${src}" class="property-name"></img>
        ${html_creator.button("", `${onclick}`, `${id}`, "toggle")}
        </div>`
    }

    selector(cls, onclick)
    {
        return `<div class="${cls} selector">
        ${html_creator.button(get_src("main", "left_arrow"), `${onclick}(-1)`, "", `button left ${cls}`)}
        <div class="${cls} display"></div>
        ${html_creator.button(get_src("main", "right_arrow"), `${onclick}(1)`, "", `button right ${cls}`)}
        </div>`
    }

    parse(value)
    {
        const string = value.toString()
        let html = ""
        for(let i = 0; i < string.length; ++i)
            html += to_img_tag(get_src("chars", string[i]), "char")
        return to_div_tag(html, "value")
    }
}