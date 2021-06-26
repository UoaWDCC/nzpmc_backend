import { Option } from '../models'

const packOption = (option) => {
    return {
        key: option.key,
        id: option.id,
        option: option.option,
        created: option.created,
        modified: option.modified,
        deleted: option.deleted,
    }
}

const packOptions = (option) => option.map(packOption)

const getQuestionOptions = async (question) => {
    const option = (await Option.collection.parent(question.key).fetch()).list
    return packOptions(option)
}

const getOptionKey = async (optionKey) => {
    const option = await Option.collection.get({ key: optionKey })
    return packOption(option)
}

const getUserQuizQuestionOptionID = async (userQuiz, optionID) => {
    const option = await Option.collection
        .parent(userQuiz.key)
        .get({ id: optionID })
    return packOption(option)
}

export {
    getQuestionOptions,
    getOptionKey,
    packOptions,
    getUserQuizQuestionOptionID,
}