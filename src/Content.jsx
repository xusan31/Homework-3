import React from 'react'

function Content() {
  return (
    <>
        <header className='flex justify-between items-center px-[30px] pt-[25px] pb-[34px] shadow-sm'>
            <ul className='flex gap-[23px] items-end'>
                <ul>
                    <img src="./src/assets/Frame.png" alt="" />
                </ul>
                <li>
                    <select name="" id="" className='text-[#050038] text-[16px]'>
                        <option value="">Product</option>
                    </select>
                </li>
                <li>
                    <select name="" id="" className='text-[#050038] text-[16px]'>
                        <option value="">Solutions</option>
                    </select>
                </li>
                <li>
                    <select name="" id="" className='text-[#050038] text-[16px]'>
                        <option value="">Resources</option>
                    </select>
                </li>
                <li>
                    <a href="" className='text-[#050038] text-[16px]'>Enterprise</a>
                </li>
                <li>
                    <a href="" className='text-[#050038] text-[16px]'>Pricing</a>
                </li>
            </ul>
            <div className='flex items-center gap-[17px]'>
                <span className='flex gap-[9px]'>
                    <img src="./src/assets/svg.png" alt="" />
                    EN
                </span>
                <a href="">Contact Sales</a>
                <a href="">Login</a>
                <a href="" className='bg-[#4262FF] rounded-4xl px-[19px] py-[9px] text-white'>Sign up free →</a>
            </div>
        </header>
        <main>
            <section className='max-w-[1120px] m-auto flex mt-[60px] justify-between'>
                <div>
                    <h1 className='max-w-[376px] text-[48px] font-bold leading-15'>Take ideas from better to best</h1>
                    <p className='max-w-[428px] text-[18px] text-[#050038B8] mt-[17px]'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
                    <input className='w-[440px] block border border-[#9B99AF] mt-[31px] px-[25px] py-[13px] rounded-4xl text-[18px] text-[#5F5C80]' type="text" name="" id="" placeholder='Enter your work email'/>
                    <button className='w-[440px] align-center border border-[#9B99AF] mt-[11px] px-[25px] py-[13px] rounded-4xl text-[18px] text-white bg-blue-500'>Sign up free →</button>
                    <span className='block text-[14px] text-[#05003866] mt-[7px] mb-[41px]'>Collaborate with your team within minutes</span>
                    <img src="./src/assets/div.png" alt="" />
                </div>
                <div>
                    <img src="./src/assets/some.png" alt="" />
                </div>
            </section>
            <section className='max-w-[1120px] flex flex-col items-center m-auto mt-[120px]'>
                <p className='text-[18px] text-[#05003899] font-semibold' >Trusted by 45M+ users</p>
                <div className='grid grid-cols-5 items-center mt-[47px] gap-[53px]'>
                    <img className='m-auto' src="./src/assets/Walmart.svg.png" alt="" />
                    <img className='m-auto' src="./src/assets/cisco.svg.png" alt="" />
                    <img className='m-auto' src="./src/assets/Volvo.svg.png" alt="" />
                    <img className='m-auto' src="./src/assets/deloitte.svg.png" alt="" />
                    <img className='m-auto' src="./src/assets/okta.svg.png" alt="" />
                </div>
                <div className='max-w-[580px] mt-[120px]'> 
                    <img className='ml-auto' src="./src/assets/Group.png" alt="" />
                    <h1 className='text-[48px] font-bold text-center leading-15'>Collaborate without constraints</h1>
                </div>
                <div className='flex mt-[13px] gap-[21px]'>
                    <div className='px-[23px] pt-[23px] pb-[43px]'>
                        <h2 className='font-bold text-[24px]'>Free forever</h2>
                        <p className='max-w-[313px] text-[18px] text-[#05003899] mt-[29px]'>Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <br /> pricing plans for more features.</p>
                    </div>
                    <div className='pl-[23px] pr-[34px] pt-[23px] pb-[43px]'>
                        <h2 className='font-bold text-[24px]'>Easy integrations</h2>
                        <p className='max-w-[313px] text-[18px] text-[#05003899] mt-[29px]'>Miro has 100+ powerful integrations with tools you already use like G<br />Suite, Slack, and Jira, so your workflow is seamless. View the full<br /> list in our <span className='text-[#4262FF]'>Marketplace</span> .</p>
                    </div>
                    <div className='px-[23px] pt-[23px] pb-[43px]'>
                        <h2 className='font-bold text-[24px]'>Security first</h2>
                        <p className='max-w-[313px] text-[18px] text-[#05003899] mt-[29px]'>We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our <span className='text-[#4262FF]'>Trust Center</span> .</p>
                    </div>
                </div>
                <button className='bg-[#4262FF] rounded-4xl px-[30px] py-[9px] text-white'>Sign up free →</button>
            </section>
            <section className='max-w-[1120px] m-auto mt-[104px] flex items-center justify-between'>
                <div>
                    <h1 className='max-w-[440px] text-[48px] font-bold leading-15 text-[#050038]'>Work together, wherever you work</h1>
                    <p className='max-w-[453px] text-[18px] mt-[17px] text-[#05003899]'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <a href="" className='inline-block text-[#4262FF] text-[18px] mt-[41px] font-semibold underline'>Learn more →</a>
                </div>
                <img src="./src/assets/hybridwork.png.png" alt="" />
            </section>
            <section className='mt-[120px]'>
                <div className='max-w-[1120px] m-auto flex justify-between items-center'>
                    <img src="./src/assets/M3_integrations_all_integrations.png.png" alt="" />
                    <div>
                        <h1 className='max-w-[350px] text-[48px] font-bold leading-15 text-[#050038]'>Connect<br /> your tools, close your tabs</h1>
                        <p className='max-w-[445px] text-[18px] mt-[29px] text-[#05003899]'>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                        <a href="" className='inline-block text-[#4262FF] text-[18px] mt-[52px] font-semibold underline'>Learn more →</a>
                    </div>
                </div>
                <img className='mt-[60px] m-auto' src="./src/assets/section.png" alt="" />
            </section>
            <section className='max-w-[1120px] m-auto mt-[90px] px-[39px]'>
                <h1 className='text-[48px] font-bold text-[#050038]'>Built for the way you work</h1>
                <ul className='flex justify-between mt-[33px]'>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] bg-[#F1F3FD] text-[14px] text-[#050038]'>Brainstorming</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Diagramming</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Meetings & Workshops</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Scrum Events</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Mapping</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Research & Design</li>
                    <li className='border border-r-0 border-[#F2F2F2] rounded-4xl rounded-br-none rounded-tr-none py-[13px] pl-[19px] pr-[15px] text-[14px] text-[#050038]'>Strategic Planning</li>
                </ul>
                <div className='flex mt-[26px] justify-between'>
                    <div>
                        <h3 className='text-[18px] mt-[31px] text-[#050038]'>Brainstorming</h3>
                        <p className='max-w-[302px] text-[18px] text-[#050038B2] mt-[26px]'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                        <a href="" className='inline-block text-[#4262FF] text-[18px] mt-[37px] font-semibold'>Learn more →</a>
                    </div>
                    <img src="./src/assets/Brainstormwithoutshadow.jpg.png" alt="" />
                </div>
            </section>
            <section className='max-w-[1120px] m-auto mt-[150px] px-[39px]'>
                <h1 className='text-[48px] font-bold text-[#050038]'>Built for all kinds of teams</h1>
                <ul className='flex gap-[9px] mt-[33px]'>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] bg-[#F1F3FD] text-[14px] text-[#050038]'>UX & Design</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Marketing</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Product Management</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Engineering</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Consultants</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[19px] pr-[27px] text-[14px] text-[#050038]'>Agile Coaches</li>
                    <li className='border border-[#F2F2F2] rounded-4xl py-[13px] pl-[17px] pr-[23px] text-[14px] text-[#050038]'>Sales</li>
                </ul>
                <div className='flex mt-[26px] justify-between'>
                    <div>
                        <ul className='mt-[30px] flex flex-col gap-[15px]'>
                            <li className='flex gap-[13px] text-[#05003899]'>
                                <img src="./src/assets/svg (1).png" alt="" />
                                Build low-fi wireframes
                            </li>
                            <li className='flex gap-[13px] items-start text-[#05003899]'>
                                <img src="./src/assets/svg (1).png" alt="" />
                                Involve stakeholders in the<br /> design process
                            </li>
                            <li className='flex gap-[13px] items-start text-[#05003899]'>
                                <img src="./src/assets/svg (1).png" alt="" />
                                Run engaging design<br /> workshops
                            </li>
                        </ul>
                        <a href="" className='inline-block text-[#4262FF] text-[18px] mt-[34px] font-semibold'>Learn more →</a>
                        <p className='text-[18px] text-[#05003899] mt-[70px]'>Integrate your favorite tools</p>
                        <div className='flex gap-[33px] mt-[22px]'>
                            <img src="./src/assets/Vector.png" alt="" />
                            <img src="./src/assets/Group 13255.png" alt="" />
                            <img src="./src/assets/Vector (1).png" alt="" />
                            <img src="./src/assets/Vector (2).png" alt="" />
                        </div>
                    </div>
                    <img src="./src/assets/div2.png" alt="" />
                </div>
            </section>
            <section className='w-full bg-[#FFD02F] mt-[150px] text-center py-[120px]'>
                <h1 className='max-w-[498px] text-[48px] font-bold text-[#050038] leading-15 m-auto'>Why companies large and small trust Miro</h1>
                <p className='text-[18px] text-[#050038] mt-[17px] underline underline-offset-4'>Contact Sales to request a demo</p>
                <div className='max-w-[1120px] m-auto grid grid-cols-3 justify-between mt-[134px] gap-y-[156px]'>
                    <div>
                        <img className='m-auto' src="./src/assets/Vector (3).png" alt="" />
                        <p className='text-[18px] text-[#050038] mt-[25px] font-semibold'>ISO-27001 enterprise-grade security compliant</p>
                    </div>
                    <div>
                        <img className='m-auto' src="./src/assets/Vector (4).png" alt="" />
                        <p className='text-[18px] text-[#050038] mt-[25px] font-semibold'>Visual Collaboration Platform on G2</p>
                    </div>
                    <div>
                        <img className='m-auto' src="./src/assets/Vector (5).png" alt="" />
                        <p className='text-[18px] text-[#050038] mt-[25px] font-semibold'>of the Fortune 100 are customers</p>
                    </div>
                    <div>
                        <img className='m-auto' src="./src/assets/Vector (6).png" alt="" />
                        <p className='text-[18px] text-[#050038] mt-[25px] font-semibold'>community- and expert-built templates</p>
                    </div>
                    <div>
                        <img className='m-auto' src="./src/assets/Vector (8).png" alt="" />
                        <p className='max-w-[332px] text-[18px] text-[#050038] mt-[25px] font-semibold'>users around the world</p>
                    </div>
                    <div>
                        <img className='m-auto' src="./src/assets/Vector (7).png" alt="" />
                        <p className='text-[18px] text-[#050038] mt-[25px] font-semibold'>integrations with technology partners</p>
                    </div>
                </div>
            </section>
            <section className='max-w-[1120px] m-auto py-[120px]'>
                <h1 className='text-[48px] text-[#050038] font-bold text-center'>Loved by the world's best teams</h1>
                <button className='block m-auto mt-[25px] text-[#4262FF] border py-[11px] px-[30px] rounded-full'>See all customer stories →</button>
                <div className='flex justify-between m-auto mt-[76px]'>
                    <div>
                        <img className='shadow-2xl' src="./src/assets/vmware.svg.png" alt="" />
                        <p className='max-w-[291px] text-[18px] text-[#05003899] mt-[34px]'>“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                        <div className='flex gap-[17px] mt-[51px]'>
                            <img src="./src/assets/rehanna.png" alt="" />
                            <div className='text-[#05003899]'>
                                <p>Roxanne Mustafa</p>
                                <p>Design Team Lead at VMware</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./src/assets/Docusign-Testimonials-280-60-Baseline.svg.png" alt="" />
                        <p className='max-w-[291px] text-[18px] text-[#05003899] mt-[34px]'>“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                        <div className='flex gap-[17px] mt-[130px]'>
                            <img src="./src/assets/jane.png" alt="" />
                            <div className='text-[#05003899]'>
                                <p>Jane Ashley</p>
                                <p>Head of Design at DocuSign</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='shadow-2xl' src="./src/assets/frog.svg.png" alt="" />
                        <p className='max-w-[291px] text-[18px] text-[#05003899] mt-[34px]'>“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                        <div className='flex gap-[17px] mt-[118px]'>
                            <img src="./src/assets/loura.png" alt="" />
                            <div className='text-[#05003899]'>
                                <p>Laura Baird</p>
                                <p>Associate Design Director at frog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-[1120px] m-auto w-full py-[120px] text-center bg-[#050038] rounded-[15px]'>
                <h1 className='text-[48px] font-bold text-white'>Join 45M+ users today</h1>
                <p className='text-[18px] text-[#FFFFFF99]'>Start for free — upgrade anytime.</p>
                <p className='text-[18px] underline underline-offset-4 text-[#FFFFFF99]'>Joining as an organization? Contact Sales</p>
                <a href="" className='inline-block mt-[41px] bg-[#4262FF] rounded-4xl px-[19px] py-[9px] text-white'>Sign up free →</a>
            </section>
        </main>
    </>
  )
}

export default Content