import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Moment from 'App/Models/Moment'
export default class CommentsController {
  public async store({ request, response, params }: HttpContextContract) {
    const body = request.body()
    const momentId = params.momentId

    const moment = await Moment.findById(momentId)

    if (!moment) {
      response.status(404)
      return {
        message: 'Momento não encontrado!',
      }
    }

    body.moment_id = momentId

    const comment = new Comment(body)
    await comment.save()

    response.status(201)

    return {
      message: 'Comentário adicionado com sucesso!',
      data: comment,
    }
  }
}
