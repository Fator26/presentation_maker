import {Point, Presentation} from "./types";

const pres: Presentation = {
    common_background: 'common_backgr',
    common_transition_style: 'common_trstyle',
    display_mode: 'presentation',
    selected_slides: ['1'],
    data: [
        {
            id: '0',
            background: 'blue',
            transition_style: 'standart',
            scale: 100,
            selected_blocks: ['text1'],
            slide_data: [
                {
                    id: 'text1',
                    type: 'text',
                    text_v: 'some text',
                    font_size: 12,
                    font_color: 'red',
                    font_family: 'Noto Sans',
                    font_weight: 5,
                    font_style: 'Bold',
                    top_left_position: {x: 10, y: 10},
                    bottom_right_position: {x: 100, y: 100},
                    layer_index: 1,
                    rotation: 0
                },
                {
                    id: 'image1',
                    type: 'image',
                    source: 'https://www.coweb.ru/upload/coweb.png',
                    source_type: 'ref',
                    top_left_position: {x: 200, y: 200},
                    bottom_right_position: {x: 400, y: 400},
                    crop: {
                        top_left_point: {x: 200, y: 200},
                        bottom_right_point: {x: 400, y: 400},
                    },
                    layer_index: 0,
                    selected: false,
                    rotation: 0
                },
                {
                    id: 'graph11',
                    type: 'graphic',
                    layer_index: 2,
                    rotation: 0,
                    color: 'red',
                    data: {
                        gr_obj_type: 'circle',
                        center_position: {x: 120, y: 20},
                        radius: 20
                    },
                }
            ]
        },
        {
            id: '1',
            background: 'blue',
            transition_style: 'standart',
            scale: 100,
            selected_blocks: [],
            slide_data: [
                {
                    id: 'graph21',
                    type: 'graphic',
                    layer_index: 2,
                    rotation: 0,
                    color: 'green',
                    data: {
                        gr_obj_type: 'rectangle',
                        top_left_position: {x: 20, y: 20},
                        rect_width: 100,
                        rect_height: 50
                    }
                },
                {
                    id: 'graph22',
                    type: 'graphic',
                    layer_index: 2,
                    rotation: 0,
                    color: 'blue',
                    data: {
                        gr_obj_type: 'triangle',
                        first_point_position: {x: 200, y: 20},
                        second_point_position: {x: 100, y: 100},
                        third_point_position: {x: 300, y: 100}
                    }
                }
            ]
        },
        {
            id: '2',
            background: 'blue',
            transition_style: 'standart',
            scale: 100,
            selected_blocks: [],
            slide_data: []
        }
    ]
};

function getTestData(): Presentation {
    return pres
}

export {
    getTestData,
}