import { useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  projectBrief: '',
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContactPage() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = '请输入姓名'
    if (!values.email.trim()) {
      nextErrors.email = '请输入邮箱'
    } else if (!isValidEmail(values.email)) {
      nextErrors.email = '请输入有效邮箱'
    }
    if (!values.projectBrief.trim()) nextErrors.projectBrief = '请输入项目需求'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitting(false)
    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <main className="mx-auto max-w-7xl px-8 pb-20 pt-36 lg:px-16">
      <span className="section-badge">Contact</span>
      <h1 className="section-title mt-6">Tell us what you want to build.</h1>
      <p className="section-copy mt-5 max-w-2xl">填写下面信息，我们会基于你的目标给出下一步建议。</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="liquid-glass rounded-2xl p-6">
          <h2 className="font-heading text-3xl italic text-white">Reach us directly</h2>
          <p className="mt-4 text-sm text-white/70">Email: hello@studio.example</p>
          <p className="mt-2 text-sm text-white/70">Response window: within 24 hours</p>
        </div>

        <form onSubmit={onSubmit} className="liquid-glass rounded-2xl p-6">
          <div className="space-y-5">
            <label className="block text-sm text-white/80">
              姓名
              <input
                name="name"
                value={values.name}
                onChange={onChange}
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
              />
              {errors.name ? <span className="mt-1 block text-xs text-red-300">{errors.name}</span> : null}
            </label>

            <label className="block text-sm text-white/80">
              邮箱
              <input
                name="email"
                value={values.email}
                onChange={onChange}
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
              />
              {errors.email ? <span className="mt-1 block text-xs text-red-300">{errors.email}</span> : null}
            </label>

            <label className="block text-sm text-white/80">
              项目需求
              <textarea
                name="projectBrief"
                value={values.projectBrief}
                onChange={onChange}
                rows={5}
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
              />
              {errors.projectBrief ? <span className="mt-1 block text-xs text-red-300">{errors.projectBrief}</span> : null}
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="liquid-glass-strong inline-flex rounded-full px-6 py-3 text-sm text-white disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit inquiry'}
            </button>

            {submitted ? <p className="text-sm text-emerald-300">提交成功，我们会尽快与你联系。</p> : null}
          </div>
        </form>
      </div>
    </main>
  )
}
