/*----------------------------------------------------------------------------------------------------*/

/*                                             MENU UI                                                */

/*----------------------------------------------------------------------------------------------------*/

class MenuUI
{
    refresh_speed(speed)
    {
        const display = get_first_from_class("speed display")
        display.innerHTML = `<img src="${data.GameSpeedToImgs[speed]}"</img>`
        disable_dragging_imgs(display)
    }

    refresh_game_mode(game_mode)
    {
        const display = get_first_from_class("game-mode display")
        display.innerHTML = `<img src="${data.GameModeToImgs[game_mode]}"</img>`
        disable_animation("button editor", game_mode != GameMode.custom)
        disable_dragging_imgs(display)
    }
}