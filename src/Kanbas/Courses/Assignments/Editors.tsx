
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div>
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      </div>
      <div>
        <textarea id="wd-description" cols={45} rows={10} >
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
      </div>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
              </select>
              <div>
                <input type="checkbox" id="wd-text-entry" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
                <input type="checkbox" id="wd-website-url" /> <label htmlFor="wd-website-url">Website URL</label><br />
                <input type="checkbox" id="wd-media-recordings" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                <input type="checkbox" id="wd-student-annotation" /> <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" id="wd-file-upload" /> <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <td align="right" valign="top">
        Assign to
      </td>
      <td>
        <div>
          <label htmlFor="wd-assign-to">Assign to</label><br />
          <input id="wd-assign-to" defaultValue="Everyone" /><br /><br />
          <label htmlFor="wd-due-date">Due</label><br />
          <input type="date" id="wd-due-date" defaultValue="2024-05-13" /><br /><br />
          <table>
            <td align="left" valign="top">
              <label htmlFor="wd-available-from">Available from</label><br />
              <input type="date" id="wd-available-from" defaultValue="05/06/2024" />
            </td>
            <td align="left" valign="top">
              <label htmlFor="wd-available-until">Until</label><br />
              <input type="date" id="wd-available-until" defaultValue="05/28/2024" />
            </td>
          </table>
          <hr />
          <div style={{ textAlign: 'right', width: '100%' }}>
          <button>Cancel</button>
          <button>Save</button>
          </div>
        </div>
      </td>
    </div>
  );
}
