import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import Application from '@ioc:Adonis/Core/Application'
import { v4 as uuidv4 } from 'uuid'

export default class ReceitasController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image!.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })

      body.image = imageName
    }

    const moment = new Moment(body)
    await moment.save()

    response.status(201)

    return {
      message: 'Receita criado com sucesso!',
      data: moment,
    }
  }

  public async index() {
    const Receitas = await Moment.find()

    return {
      data: Receitas,
    }
  }

  public async show({ params }: HttpContextContract) {
    const moment = await Moment.findById(params.id)

    if (!moment) {
      return {
        message: 'Receita não encontrada!',
      }
    }

    return {
      data: moment,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const moment = await Moment.findById(params.id)

    if (!moment) {
      return {
        message: 'Receita não encontrada!',
      }
    }

    await moment.delete()

    return {
      message: 'Receita excluída com sucesso!',
      data: moment,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()

    const moment = await Moment.findById(params.id)
    if (!moment) {
      return {
        message: 'Receita não encontrada!',
      }
    }

    moment.title = body.title
    moment.description = body.description

    if (moment.image !== body.image || !moment.image) {
      const image = request.file('image', this.validationOptions)

      if (image) {
        const imageName = `${uuidv4()}.${image!.extname}`

        await image.move(Application.tmpPath('uploads'), {
          name: imageName,
        })

        moment.image = imageName
      }
    }

    await moment.save()

    return {
      message: 'Receita atualizada com sucesso!',
      data: moment,
    }
  }
}
